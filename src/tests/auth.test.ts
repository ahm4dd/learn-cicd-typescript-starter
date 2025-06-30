import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

const apiKey1 = "ApiKey 123";
const headers1: IncomingHttpHeaders = {
  authorization: apiKey1,
};

const apiKey2 = "Bearer 456";
const headers2: IncomingHttpHeaders = {
  authorization: apiKey2,
};

describe("ApiKey", () => {
  test("Grabbing the API Key", () => {
    expect(getAPIKey(headers1)).toBe("123");
  });

  test("Checking if API Key exists in request", () => {
    expect(getAPIKey(headers2)).toBe(null);
  });
});
