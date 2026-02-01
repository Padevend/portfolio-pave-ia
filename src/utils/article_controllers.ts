import articles_data from "@/data/articles.json";
import { load_content } from "./helpers";

const articles: Article[] = articles_data;

class blog_controller{
    getArticleById(slug: string) {
        return articles.find(article => article.slug === slug);
    }

    getAllArticles() {
        return articles;
    }

    async getArticlesContent(path: string) {
        return await load_content(path);
    }
}

const BlogController = new blog_controller();
export default BlogController;