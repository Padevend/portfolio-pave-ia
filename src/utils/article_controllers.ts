import articles_data from "@/data/articles.json";
import { load_content } from "./helpers";

// TYPES
interface getProps {
    limit?: number,
    order?: "asc" | "desc",
    exclude?: string[]
}

const articles: Article[] = articles_data;

class blog_controller{
    getArticleById(slug: string) {
        return articles.find(article => article.slug === slug);
    }

    getAllArticles(props: getProps) {
        let request = articles

        if(props.exclude){
            request = request.filter((art)=>!props.exclude?.includes(art.slug))
        }

        if(props.order){
            if(props.order==="desc"){
                request = request.sort((a, b) => {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                });
            }else{
                request = request.sort((a, b) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                });
            }
        }

        if(props.limit){
            request = request.slice(0, props.limit)
        }

        return request;
    }

    async getArticlesContent(path: string) {
        return await load_content(path);
    }
}

const BlogController = new blog_controller();
export default BlogController;