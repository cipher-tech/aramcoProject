import Router from "next/router";

export default function redirect (context: any, target: string){
    if(context.res) {
        //server
        //303: "see other"
        context.res.writeHead(303, {Location: target});
        context.res.end()
    }else{
        //in browser, pretend like it never happened
        Router.replace(target)
    }
}