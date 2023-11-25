# Installation

```bash
cd %logger_directory_name%
npm i
```

# Enviroment variables

* **PORT** - port for listening
* **DB_URI** - Postgres connection string

# Database seeding

```bash
npm run seed
```

**Run this command ONLY IN TEST ENVIRONMENT!**

# Running developer mode

```bash
npm run dev
```
---

# Creating log entry

Method: POST
URL: /logs

Description: This endpoint facilitates the creation of access logs for smart locks. It accepts a POST request containing the UID of the guest access, the UID of the smart lock, the date and time of the access attempt (in Unix milliseconds), the access status (successful or not), and the guest's phone number associated with the guest access.

Example Request:

```json
{
    "access_uuid": "94651f50-0a94-471a-83b8-dc41db226399",
    "lock": "b6385951-b27d-43c9-a407-3d84fe82166b",
    "phone": "215.297.0524 x347",
    "attempted_at": "1703399756507",
    "attempt_status": true
}
```
Response: Returns a boolean value indicating the success of the log creation.

# Getting logs

Method: GET
URL: /logs

Description: Retrieves the 30 most recent log entries with the option for additional filtering using query parameters.

Example Response:

```json
{
    "success": true,
    "logs": [
        {
            "_id": 10,
            "access_uuid": "7ebc7ed5-c3e4-47e7-be24-60b8d12cef18",
            "lock": "90387617-c84f-4401-945d-f32c7a980a98",
            "phone": "995.956.5217 x09514",
            "attempted_at": "1703445496472",
            "attempt_status": true
        },
        {
            "_id": 76,
            "access_uuid": "94651f50-0a94-471a-83b8-dc41db226399",
            "lock": "b6385951-b27d-43c9-a407-3d84fe82166b",
            "phone": "215.297.0524 x347",
            "attempted_at": "1703399756507",
            "attempt_status": true
        },
        {
            "_id": 37,
            "access_uuid": "d0383761-5435-4586-a159-2994c9f4d86b",
            "lock": "70456091-23e9-44e3-84be-6a997a8e60a9",
            "phone": "(441) 398-3646 x414",
            "attempted_at": "1693838362970",
            "attempt_status": false
        }
        // Additional log entries...
    ]
}
```

Each log entry contains:

* **_id** (integer): Unique identifier for the log entry.
* **access_uuid** (string): UUID of the guest access.
* **lock** (string): UUID of the smart lock.
* **phone** (string): Phone number of the guest associated with the access attempt.
* **attempted_at** (string): Date and time of the access attempt in Unix timestamp format (milliseconds).
* **attempt_status** (boolean): Indicates the success or failure of the access attempt.

Query Parameters (you can combine multiple query-parameters):

* **?accessUuid=**  Filters logs by guest access UID.
* **?offset=** Sets the offset for pagination (numbers of entries to skip).
* **?datefrom=** Sets the starting date for data retrieval (Unix milliseconds).
* **?dateto=** Sets the ending date for data retrieval (Unix milliseconds).
* **?phone=** Filters logs by guest's phone number.
* **?lock=** Filters logs by smart lock UID.
* **?onlyGranted** Filters for only successful access attempts. Must be provided without value
* **?onlyDenied** Filters for only unsuccessful access attempts.Must be provided without value

**onlyGranted and onlyDenied parameters are mutually exclusive. Do not combine them both in the same request!**

For successful log creation, ensure that the POST request includes all necessary fields to accurately record the access attempt log. To retrieve logs, utilize the query parameters for specific filtering and data selection.