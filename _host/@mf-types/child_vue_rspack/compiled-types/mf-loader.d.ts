import "./index.css";
type GetCreateAppParams = {
    message?: string;
};
export default function getCreateApp(params: GetCreateAppParams): import("vue").App<Element>;
export {};
