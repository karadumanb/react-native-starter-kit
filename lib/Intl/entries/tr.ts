import trMessages from "../locales/tr.json";
import { ObjectService } from "services";

const trLang = {
  messages: ObjectService.flattenPayload(trMessages),
  locale: "tr-TR",
};

export default trLang;
