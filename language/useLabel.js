import { useTranslation } from "react-i18next";
import i18n from "../assets/i18n/i18n";

const useLabel = () => {

    const [t] = useTranslation();
    const bookAppointment = t("bookAppointment");
    const viewAppointment = t("viewAppointment");

    return [
        bookAppointment,
        viewAppointment,
    ];

}

export default useLabel;



