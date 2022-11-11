/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/image_operations": {
    /** Retrieves the collection of ImageOperation resources. */
    get: operations["api_image_operations_get_collection"];
    parameters: {};
  };
  "/api/image_operations/{id}": {
    /** Retrieves a ImageOperation resource. */
    get: operations["api_image_operations_id_get"];
    parameters: {};
  };
  "/api/image_operations/{id}/retry": {
    /** Creates a ImageOperation resource. */
    post: operations["api_image_operations_idretry_post"];
    parameters: {};
  };
  "/api/images": {
    /** Creates a Image resource. */
    post: operations["api_images_post"];
    parameters: {};
  };
  "/api/images/{name}": {
    /** Retrieves a Image resource. */
    get: operations["api_images_name_get"];
    parameters: {};
  };
  "/api/login": {
    /** Creates a Session resource. */
    post: operations["api_login"];
    parameters: {};
  };
  "/api/logout": {
    /** Logout and clear the session cookie */
    post: operations["logout"];
    parameters: {};
  };
  "/api/record_operations": {
    /** Retrieves the collection of RecordOperation resources. */
    get: operations["api_record_operations_get_collection"];
    parameters: {};
  };
  "/api/record_operations/{id}": {
    /** Retrieves a RecordOperation resource. */
    get: operations["api_record_operations_id_get"];
    parameters: {};
  };
  "/api/record_operations/{id}/retry": {
    /** Creates a RecordOperation resource. */
    post: operations["api_record_operations_idretry_post"];
    parameters: {};
  };
  "/api/records": {
    /** Creates a Record resource. */
    post: operations["api_records_post"];
    parameters: {};
  };
  "/api/records/{market}/{date}": {
    /** Retrieves a Record resource. */
    get: operations["api_records_market_date_get"];
    parameters: {};
  };
  "/api/user": {
    /** Retrieves a Session resource. */
    get: operations["api_user_get"];
    parameters: {};
  };
}

export interface components {
  schemas: {
    Image: {
      id?: string;
      name?: string;
      /** Format: date-time */
      debutOn?: string;
      urlbase?: string;
      copyright?: string;
      downloadable?: boolean;
      video?: string[] | null;
    };
    ImageOperation: {
      /** Format: ulid */
      id?: string;
      name?: string;
      urlbase?: string;
      video?: string[] | null;
      status?: string;
      logs?: string[];
    };
    "ImageOperation-read": {
      /** Format: ulid */
      id?: string;
      name?: string;
      urlbase?: string;
      video?: string[] | null;
      status?: string;
    };
    "ImageOperation.RetryDownloadImage": {
      /** Format: ulid */
      id?: string;
    };
    Record: {
      imageId?: string;
      id?: string;
      image?: components["schemas"]["Image"];
      /** Format: date-time */
      date?: string;
      market?: string;
      title?: string;
      keyword?: string | null;
      headline?: string | null;
      description?: string | null;
      quickfact?: string | null;
      hotspots?: string[] | null;
      messages?: string[] | null;
      coverstory?: string[] | null;
      dateString?: string;
    };
    RecordOperation: {
      /** Format: ulid */
      id?: string;
      market?: string;
      /** Format: date-time */
      date?: string;
      status?: string;
      logs?: string[];
    };
    "RecordOperation-read": {
      /** Format: ulid */
      id?: string;
      market?: string;
      /** Format: date-time */
      date?: string;
      status?: string;
    };
    "RecordOperation.RetryCollectRecord": {
      /** @enum {string} */
      policy?: "error" | "update" | "ignore";
      /** Format: ulid */
      id?: string;
    };
    "Session.Login": {
      username?: string;
      password?: string;
    };
    "Session.User": {
      /** Format: ulid */
      id?: string;
      username?: string;
      password?: string | null;
      roles?: string[];
      userIdentifier?: string;
    };
  };
  responses: {};
  parameters: {};
  requestBodies: {};
  headers: {};
}

export interface operations {
  /** Retrieves the collection of ImageOperation resources. */
  api_image_operations_get_collection: {
    parameters: {
      query: {
        /** The collection page number */
        page?: number;
      };
    };
    responses: {
      /** ImageOperation collection */
      200: {
        content: {
          "application/json": components["schemas"]["ImageOperation-read"][];
          "text/html": components["schemas"]["ImageOperation-read"][];
        };
      };
    };
  };
  /** Retrieves a ImageOperation resource. */
  api_image_operations_id_get: {
    parameters: {
      path: {
        /** ImageOperation identifier */
        id: string;
      };
    };
    responses: {
      /** ImageOperation resource */
      200: {
        content: {
          "application/json": components["schemas"]["ImageOperation"];
          "text/html": components["schemas"]["ImageOperation"];
        };
      };
      /** Resource not found */
      404: unknown;
    };
  };
  /** Creates a ImageOperation resource. */
  api_image_operations_idretry_post: {
    parameters: {
      path: {
        /** ImageOperation identifier */
        id: string;
      };
    };
    responses: {
      /** ImageOperation resource created */
      202: {
        content: {
          "application/json": components["schemas"]["ImageOperation.RetryDownloadImage"];
          "text/html": components["schemas"]["ImageOperation.RetryDownloadImage"];
        };
      };
      /** Invalid input */
      400: unknown;
      /** Unprocessable entity */
      422: unknown;
    };
    /** The new ImageOperation resource */
    requestBody: {
      content: {
        "application/json": components["schemas"]["ImageOperation.RetryDownloadImage"];
        "text/html": components["schemas"]["ImageOperation.RetryDownloadImage"];
      };
    };
  };
  /** Creates a Image resource. */
  api_images_post: {
    parameters: {};
    responses: {
      /** Image resource created */
      201: {
        content: {
          "application/json": components["schemas"]["Image"];
          "text/html": components["schemas"]["Image"];
        };
      };
      /** Invalid input */
      400: unknown;
      /** Unprocessable entity */
      422: unknown;
    };
    /** The new Image resource */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Image"];
        "text/html": components["schemas"]["Image"];
      };
    };
  };
  /** Retrieves a Image resource. */
  api_images_name_get: {
    parameters: {
      path: {
        /** Image identifier */
        name: string;
      };
    };
    responses: {
      /** Image resource */
      200: {
        content: {
          "application/json": components["schemas"]["Image"];
          "text/html": components["schemas"]["Image"];
        };
      };
      /** Resource not found */
      404: unknown;
    };
  };
  /** Creates a Session resource. */
  api_login: {
    parameters: {};
    responses: {
      /** Session resource created */
      204: {
        content: {
          "application/json": unknown;
          "text/html": unknown;
        };
      };
      /** Invalid input */
      400: unknown;
      /** Unprocessable entity */
      422: unknown;
    };
    /** The new Session resource */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Session.Login"];
        "text/html": components["schemas"]["Session.Login"];
      };
    };
  };
  /** Logout and clear the session cookie */
  logout: {
    parameters: {};
    responses: {
      /** Session resource created */
      204: {
        content: {
          "application/json": unknown;
          "text/html": unknown;
        };
      };
      /** Invalid input */
      400: unknown;
      /** Unprocessable entity */
      422: unknown;
    };
    requestBody: {
      content: {
        "application/json": { [key: string]: unknown } | null;
      };
    };
  };
  /** Retrieves the collection of RecordOperation resources. */
  api_record_operations_get_collection: {
    parameters: {
      query: {
        /** The collection page number */
        page?: number;
      };
    };
    responses: {
      /** RecordOperation collection */
      200: {
        content: {
          "application/json": components["schemas"]["RecordOperation-read"][];
          "text/html": components["schemas"]["RecordOperation-read"][];
        };
      };
    };
  };
  /** Retrieves a RecordOperation resource. */
  api_record_operations_id_get: {
    parameters: {
      path: {
        /** RecordOperation identifier */
        id: string;
      };
    };
    responses: {
      /** RecordOperation resource */
      200: {
        content: {
          "application/json": components["schemas"]["RecordOperation"];
          "text/html": components["schemas"]["RecordOperation"];
        };
      };
      /** Resource not found */
      404: unknown;
    };
  };
  /** Creates a RecordOperation resource. */
  api_record_operations_idretry_post: {
    parameters: {
      path: {
        /** RecordOperation identifier */
        id: string;
      };
    };
    responses: {
      /** RecordOperation resource created */
      202: {
        content: {
          "application/json": components["schemas"]["RecordOperation.RetryCollectRecord"];
          "text/html": components["schemas"]["RecordOperation.RetryCollectRecord"];
        };
      };
      /** Invalid input */
      400: unknown;
      /** Unprocessable entity */
      422: unknown;
    };
    /** The new RecordOperation resource */
    requestBody: {
      content: {
        "application/json": components["schemas"]["RecordOperation.RetryCollectRecord"];
        "text/html": components["schemas"]["RecordOperation.RetryCollectRecord"];
      };
    };
  };
  /** Creates a Record resource. */
  api_records_post: {
    parameters: {};
    responses: {
      /** Record resource created */
      201: {
        content: {
          "application/json": components["schemas"]["Record"];
          "text/html": components["schemas"]["Record"];
        };
      };
      /** Invalid input */
      400: unknown;
      /** Unprocessable entity */
      422: unknown;
    };
    /** The new Record resource */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Record"];
        "text/html": components["schemas"]["Record"];
      };
    };
  };
  /** Retrieves a Record resource. */
  api_records_market_date_get: {
    parameters: {
      path: {
        /** Record identifier */
        market: string;
        /** Record identifier */
        date: string;
      };
    };
    responses: {
      /** Record resource */
      200: {
        content: {
          "application/json": components["schemas"]["Record"];
          "text/html": components["schemas"]["Record"];
        };
      };
      /** Resource not found */
      404: unknown;
    };
  };
  /** Retrieves a Session resource. */
  api_user_get: {
    parameters: {};
    responses: {
      /** Session resource */
      200: {
        content: {
          "application/json": components["schemas"]["Session.User"];
          "text/html": components["schemas"]["Session.User"];
        };
      };
      /** Resource not found */
      404: unknown;
    };
  };
}

export interface external {}
