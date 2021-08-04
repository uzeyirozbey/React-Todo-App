import  {Component} from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { Container, Image, Menu, Visibility } from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from "../../helpers/styleHelper";
class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
      }
  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: null });
    render(){
        const { menuFixed } = this.state
        return (
            <div>
               <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                    >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                        <Menu.Item>
                            <Image size='mini' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' />
                        </Menu.Item>
                        <Menu.Item  header as={Link} to="/">React Crud App</Menu.Item>
                        {/* <Menu.Item as={Link} to="movies">    Film Listesi</Menu.Item> */}
                        <Menu.Item  as={NavLink}  to="/ogrenci">   Ögrenci Listesi</Menu.Item>
                        <Menu.Item  as={NavLink}  to="/OgrenciEkle">Yeni Ekle</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div> 
        )
    }
}


export default Header;