import ssrRequest from "lib/ssrRequest";
import withLayout from "hoc/withLayout";
import Content from "./Content";
import './style.scss';

const Home = async (props) => {
    console.log(props, 'props home')
    const data = await ssrRequest({url: 'products?categories=4'})
    return <Content props={data}/>;
}

export default withLayout(Home)