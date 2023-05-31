""" Code of Calculator in JS """
function add()
{
    let action=0,b=0;
    action=f.main.value;
    b=action.charAt(action.length-1);
    if(b === '+' || b === '-' || b === '*' || b ==='/' || b === '%')
    {
        f.main.value = action.substring(0,action.length-1);
        f.main.value += '+';
    }
    else
    {
        f.main.value += '+';
    }
}
function sub()
{
    let action=0,b=0;
    action=f.main.value;
    b=action.charAt(action.length-1);
    if(b === '+' || b === '-' || b === '*' || b ==='/' || b === '%')
    {
        f.main.value = action.substring(0,action.length-1);
        f.main.value += '-';
    }
    else
    {
        f.main.value += '-';
    }
}
function mul()
{
    let action=0,b=0;
    action=f.main.value;
    b=action.charAt(action.length-1);
    if(b === '+' || b === '-' || b === '*' || b ==='/' || b === '%')
    {
        f.main.value = action.substring(0,action.length-1);
        f.main.value += '*';
    }
    else
    {
        f.main.value += '*';
    }
}
function div()
{
    let action=0,b=0;
    action=f.main.value;
    b=action.charAt(action.length-1);
    if(b === '+' || b === '-' || b === '*' || b ==='/' || b === '%')
    {
        f.main.value = action.substring(0,action.length-1);
        f.main.value += '/';
    }
    else
    {
        f.main.value += '/';
    }
}
function mod()
{
    let action=0,b=0;
    action=f.main.value;
    b=action.charAt(action.length-1);
    if(b === '+' || b === '-' || b === '*' || b ==='/' || b === '%')
    {
        f.main.value = action.substring(0,action.length-1);
        f.main.value += '%';
    }
    else
    {
        f.main.value += '%';
    }
}
function clear()
{
    f.main.value = action.substring(0,action.length-2);
}
