import { useState } from "react";

// use_State - calling the hook in a separate module makes it possible to mask it
export const use_State = (str: string) => {
    const [value, setValue] = useState(str);
    return {value, setValue};
}