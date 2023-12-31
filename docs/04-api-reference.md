---
sidebar_position: 4
---

# API Reference

The base URL for our API is `https://api.countify.fun`. To be able to use these API endpoints, make sure to prefix them with the base URL.

## `/servers`

Returns a list of servers sorted by highest count.

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

## `/servers/:id`

Returns information about the specified server ID.

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

## `/users/:id`

Returns global information about the specified user ID.

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

## `/servers/:id/users`

Returns the top 10 users.

### Parameters

#### URL

`id`: A server ID.

#### Query

`sort`: A sort type. Can be `counts`, `fails`, or `cf_ratio`. (Default: `cf_ratio`)

### Response

```json
[
  {
    "id": "string",
    "name": "string",
    "username": "string",
    "avatar": "string",
    "counts": "number",
    "fails": "number"
  }
]
```

## `/servers/:sid/users/:uid`

Returns server information about the specified user ID in the specified server ID.

### Parameters

`sid`: A server ID.

`uid`: A user ID.

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
