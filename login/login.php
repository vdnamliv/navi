<!DOCTYPE html>
<html lang="en">
<head>
    <title> Login Page </title>
    <link rel="stylesheet" type="text/css" href= "style.css" >
</head>
<body>
    <div id="frm">
        <form action = "process.php" method = "POST" > 
        <table >
                <tr>
                    <td>
                        Tên đăng nhập :
                    </td>
                    <td>
                        <input type="text" id="user" name="user" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Mật khẩu :
                    </td>
                    <td>
                        <input type="password" id="pass" name="pass" />
                    </td>
                </tr>
            </table>
            <input type="submit" id="btn" value="Đăng nhập" />
        </form>
    </div>
</body>
</html>

//cellpadding='0' cellspacing='0' border='1'