/**
 * API utility functions for communicating with Django backend
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

/**
 * Get CSRF token from cookie
 */
function getCsrfToken(): string | null {
  if (typeof document === 'undefined') return null;
  const name = 'csrftoken';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

/**
 * Generic API request handler
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;

  // Build URL with query parameters
  let url = `${API_BASE_URL}${endpoint}`;
  if (params) {
    const queryString = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)])
    ).toString();
    url += `?${queryString}`;
  }

  // Set default headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  // Add CSRF token for non-GET requests
  if (fetchOptions.method && fetchOptions.method !== 'GET') {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      (headers as Record<string, string>)['X-CSRFToken'] = csrfToken;
    }
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      credentials: 'include', // Include cookies for session-based auth
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({} as any));
      // Build a readable error message from DRF errors
      let message = `API Error: ${response.status} ${response.statusText}`;
      if (errorData) {
        if (typeof errorData.detail === 'string') {
          message = errorData.detail;
        } else if (typeof errorData.message === 'string') {
          message = errorData.message;
        } else if (typeof errorData === 'object') {
          const firstKey = Object.keys(errorData)[0];
          const firstVal = firstKey ? (errorData as any)[firstKey] : null;
          if (Array.isArray(firstVal) && typeof firstVal[0] === 'string') {
            message = firstVal[0];
          } else if (typeof firstVal === 'string') {
            message = firstVal;
          }
        }
      }
      const err = new Error(message);
      (err as any).status = response.status; // Attach status code for callers
      throw err; // Important: actually throw the error
    }

    return await response.json();
  } catch (error: any) {
    // Suppress noisy logs for expected unauthorized checks on auth/me
    const isAuthMe =
      typeof endpoint === 'string' &&
      endpoint.endsWith('/auth/me') &&
      (fetchOptions.method ?? 'GET') === 'GET';

    const status = Number(error?.status);
    if (!(isAuthMe && (status === 401 || status === 403))) {
      console.error('API Request Error:', error);
    }
    throw error;
  }
}

/**
 * GET request
 */
export async function get<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>
): Promise<T> {
  return apiRequest<T>(endpoint, { method: 'GET', params });
}

/**
 * POST request
 */
export async function post<T>(
  endpoint: string,
  data?: unknown
): Promise<T> {
  return apiRequest<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * PUT request
 */
export async function put<T>(
  endpoint: string,
  data?: unknown
): Promise<T> {
  return apiRequest<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * PATCH request
 */
export async function patch<T>(
  endpoint: string,
  data?: unknown
): Promise<T> {
  return apiRequest<T>(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

/**
 * DELETE request
 */
export async function del<T>(endpoint: string): Promise<T> {
  return apiRequest<T>(endpoint, { method: 'DELETE' });
}

/**
 * Upload file(s)
 */
export async function uploadFile<T>(
  endpoint: string,
  file: File | File[],
  additionalData?: Record<string, string>
): Promise<T> {
  const formData = new FormData();

  if (Array.isArray(file)) {
    file.forEach((f, index) => {
      formData.append(`file_${index}`, f);
    });
  } else {
    formData.append('file', file);
  }

  if (additionalData) {
    Object.entries(additionalData).forEach(([key, value]) => {
      formData.append(key, value);
    });
  }

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `Upload Error: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('File Upload Error:', error);
    throw error;
  }
}

// Export default API client
export const api = {
  get,
  post,
  put,
  patch,
  delete: del,
  uploadFile,
};
