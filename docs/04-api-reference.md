---
sidebar_position: 4
---

# API Reference

The API for your dream Discord counting bot.

```sh title="Base URL"
https://api.countify.fun
```

## `/servers`

Retrive a list of servers sorted by highest count.

### Response

```json
[
  {
    "id": "string",
    "name": "string",
    "avatar": "string | undefined",
    "count": "number"
  }
]
```

## `/servers/{id}`

Retrive information about the specified server ID.

### Parameters

`id`: A server ID.

### Response

```json
{
  "id": "string",
  "name": "string",
  "avatar": "string | undefined",
  "count": "number",
  "previousUser": {
    "id": "string",
    "name": "string",
    "username": "string",
    "avatar": "string",
    "counts": "number",
    "fails": "number"
  }
}
```

## `/users/{id}`

Retrive information about the specified user ID.

### Parameters

`id`: A user ID.

### Response

```json
{
  "id": "string",
  "name": "string",
  "username": "string",
  "avatar": "string",
  "counts": "number",
  "fails": "number"
}
```

## `/servers/{id}/users`

Retrive a paginated list of all the users from the specified server ID.

### Parameters

#### URL

`id`: A server ID.

#### Query

`sort`: A sort type. Can be `counts`, `fails`, or `cf_ratio`. (Default: `cf_ratio`)

`page`: The page to view. (Default: `1`)

### Response

```json
{
  "users": [
    {
      "id": "string",
      "name": "string",
      "username": "string",
      "avatar": "string",
      "counts": "number",
      "fails": "number"
    }
  ],
  "totalPages": "number"
}
```

## `/servers/{serverId}/users/{userId}`

Retrive information about the specified user ID from the specified server ID.

### Parameters

`serverId`: A server ID.

`userId`: A user ID.

### Response

```json
{
  "server": {
    "id": "string",
    "name": "string",
    "avatar": "string | undefined",
    "count": "number"
  },
  "user": {
    "id": "string",
    "name": "string",
    "username": "string",
    "avatar": "string"
  },
  "counts": "number",
  "fails": "number"
}
```

## `/servers/{id}/history`

Retrive the count history the specified server ID.

### Parameters

`id`: A server ID.

### Response

```json
[
  {
    "time": "number",
    "count": "number"
  }
]
```
