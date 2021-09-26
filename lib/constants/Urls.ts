export const Urls = {
  Login: function (): UrlsType {
    const Base = "Login";
    return {
      POST: Base,
      GET: Base,
    };
  }
};

type UrlsType = { [key in any]?: string };
