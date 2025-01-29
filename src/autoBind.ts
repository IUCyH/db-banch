export default function autoBind(obj: any) {
    const proto = Object.getPrototypeOf(obj);

    Object.getOwnPropertyNames(proto).forEach(key => {
        const value = proto[key];

        if(typeof value === "function" && key !== "constructor") {
            obj[key] = value.bind(obj);
        }
    });
}