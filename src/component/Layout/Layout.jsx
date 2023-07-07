import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div>
            <Header url={props.url}/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;