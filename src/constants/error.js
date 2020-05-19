
/////////////////////////////
// Start. Section 'Error response from server'
//
export const NO_ERRORS = {code: -1, message: "Response Status 'Ok'. No error. :)"};
// errors response
export const ERRORS_RESPONSE = [
    {code: 0, message: "Error 0 - rezerv / Резерв"},
    {code: 1, message: "Login is required parameter / Не указан логин"},
    {code: 2, message: "Password is required parameter /	Не указан пароль"},
    {code: 3, message: "Session identifier is required parameter / Не указан идентификатор сессии (SID)"},
    {code: 4, message: "Session identifier is fault / Неправильный идентификатор сессии (SID)"},
    {code: 5, message: "Session identifier is outdate / Окончилось время жизни сессии"},

    {code: 6, message: "Incorrect login or password /	Неправильный логин или пароль"},
    {code: 7, message: "User was blocked / Пользователь заблокирован"},
    {code: 8, message: "Incorrect categoryID / Неправильный идентификатор категории (categoryID)"},
    {code: 9, message: "Incorrect filterID / Неправильный идентификатор фильтра (filterID)"},
    {code: 10, message: "Incorrect limit / Неправильное значение параметра limit"}];
//
// End. Section 'Error response from server'
/////////////////////////////


