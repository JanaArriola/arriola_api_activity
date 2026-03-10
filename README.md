# Arriola-api-activity

# RESTful API Activity - Jananilyn E. Arriola

## Best Practices Implementation

**1. Environment Variables:**
- **Why did we put `BASE_URI` in `.env` instead of hardcoding it?**
  - Answer: We put the BASE_URI in the .env file so that it can be easily changed without modifying the code. This allows for flexibility between different environments (development, testing, production) and keeps sensitive configuration separate from the source code. Also make sure to add `.env` to `.gitignore` so sensitive configuration is not committed.

**2. Resource Modeling:**
- **Why did we use plural nouns (e.g., `/rooms`) for our routes?**
  - Answer: We use plural nouns to represent collections of resources consistently in a RESTful API. This makes it clear that the endpoint deals with multiple items (e.g., multiple rooms) and follows standard REST conventions, improving readability and maintainability.

**3. Status Codes:**
- **When do we use `201 Created` vs `200 OK`?**
  - Answer: 201 Created is used when a new resource is successfully created via a POST request, indicating that a new entry has been added to the server. For `201 Created`, include a `Location` header pointing to the new resource. 200 OK is used when retrieving or updating resources successfully (for deletes, `204 No Content` is common). Use `400/401/403` for validation/auth errors as appropriate.

- **Why is it important to return `404` instead of just an empty array or a generic error?**
  - Answer: Returning 404 Not Found clearly informs the client that the requested resource does not exist. For collection endpoints (e.g., `GET /rooms`), returning `200 OK` with an empty array is fine when there are no items; use `404` when a specific resource (e.g., `GET /rooms/123`) does not exist. An empty array or generic error could be misleading, making it seem like the resource exists but contains no data. Using proper status codes improves clarity and helps the client handle responses correctly.
