import { UserData } from "../../types";

export function mockApiLogin(email: string, _password: string) {
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
