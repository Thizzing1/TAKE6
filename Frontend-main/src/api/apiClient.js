const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:3000";


export async function apiClient(
  endpoint,
  options = {}
) {

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,

      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    }
  );


  // ==================================================
  // READ THE RESPONSE
  // ==================================================

  const contentType =
    response.headers.get("content-type");


  let data;


  if (
    contentType &&
    contentType.includes("application/json")
  ) {

    data = await response.json();

  } else {

    // Your backend may return plain text on success.
    // Therefore we MUST NOT automatically treat
    // non-JSON as an error.

    data = await response.text();

  }


  // ==================================================
  // HANDLE HTTP ERRORS
  // ==================================================

  if (!response.ok) {

    let message =
      "Server Error";


    if (
      typeof data === "object" &&
      data?.message
    ) {

      message = data.message;

    }

    else if (
      typeof data === "string" &&
      data.trim()
    ) {

      message = data;

    }


    const error = new Error(message);

    error.status = response.status;

    error.data = data;


    throw error;

  }


  // ==================================================
  // SUCCESS
  // ==================================================
  //
  // Whether the backend returns:
  //
  // JSON
  //
  // OR
  //
  // plain text
  //
  // we simply return it.
  // ==================================================

  return data;

}