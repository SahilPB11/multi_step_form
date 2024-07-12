// src/hooks/__tests__/useLocalStorage.test.js
import { renderHook, act } from "@testing-library/react-hooks";
import { useLocalStorage } from "../useLocalStorage";

test("should use local storage", () => {
  const { result } = renderHook(() => useLocalStorage("key", "default"));

  expect(result.current[0]).toBe("default");

  act(() => {
    result.current[1]("newValue");
  });

  expect(result.current[0]).toBe("newValue");
  expect(localStorage.getItem("key")).toBe(JSON.stringify("newValue"));
});
