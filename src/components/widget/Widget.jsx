import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ( { type } ) => {

    const retData = (title, isMoney, link, icon ) => {
        return { title: title, isMoney: isMoney, link: link, icon: icon };
    }

    const amount = 100;
    const diff = 20;
    let data;
    switch (type) {
        case "user":
            data = retData("USERS", false, "See all users", <PersonOutlinedIcon
                                                                                className="icon"
                                                                                style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)"}}/> );
            break;

        case "order":
            data = retData("ORDERS", false, "View all orders", <ShoppingCartOutlinedIcon
                                                                                    className="icon"
                                                                                    style={{color:"goldenrod", backgroundColor:"rgba(218,165,32,0.2)"}}/> );
            break;

        case "earning":
            data = retData("EARNINGS", true, "View net earnings", <MonetizationOnOutlinedIcon
                                                                                        className="icon"
                                                                                        style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)"}}/> );
            break;

        case "balance":
            data = retData("BALANCE", false, "See details", <AccountBalanceWalletOutlinedIcon
                                                                                    className="icon"
                                                                                    style={{color:"purple", backgroundColor:"rgba(128,0,128,0.2)"}}/> );
            break;

        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
}
export default Widget