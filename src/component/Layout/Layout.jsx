const Layout = (props) => {
    return (
        <div>
            <header url={props.url}/>
            <main>
                {props.children}
            </main>
            <footer/>
        </div>
    );
}

export default Layout;