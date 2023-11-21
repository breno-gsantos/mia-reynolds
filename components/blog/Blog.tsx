import axios from "axios";
import SectionHeader from "../events/SectionHeader";
import PostList from "./PostList";

const getPostList = async() => {
    const res = await axios.get('http://localhost:4000/posts');
    return res.data;
}

export default async function Blog() {
    const posts = await getPostList();

    return (
        <section className="section" id="blog">
            <div className="container mx-auto">
                <SectionHeader pretitle="Our blog" title="Latest News" />
                <PostList posts={posts} />
            </div>
        </section>
    )
}