import { AuthParams, UserData } from "../../types";

export function mockApiLogin({ email }: AuthParams) {
  return new Promise<{ data: UserData }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: {
            email,
            token: "jfaklrieowjrqnefklqenkwj",
          },
        }),
      1000
    )
  );
}

export function mockApiSignup({ name, email }: AuthParams) {
  return new Promise<{ data: UserData }>((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: {
            name,
            email,
            token: "jfaklrieowjrqnefklqenkwj",
          },
        }),
      1500
    );
  });
}
