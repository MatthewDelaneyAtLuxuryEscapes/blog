import 'isomorphic-fetch'

function handleResponse(response: Response) {
  const status = response.status
  const contentType = response.headers?.get('Content-Type')
  if (status === 204 || !contentType) {
    return
  }

  if (contentType.includes('application/json')) {
    return response.json()
  }

  if (contentType.includes('application/pdf')) {
    return response.blob()
  }

  return response.text()
}

export async function reqGET<R = unknown>(url: string | URL): Promise<R> {
  const response = await fetch(url, { method: 'GET' })

  return handleResponse(response)
}

export async function reqPOST<R = unknown, B = any>(url: string | URL, payload: B): Promise<R> {
  const response = await fetch(url, { method: 'POST', body: JSON.stringify(payload) })

  return handleResponse(response)
}
