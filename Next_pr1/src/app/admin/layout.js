import AdminHead from "@/component/AdminHead";

export default function adminLayout({children}){
    return(
        <section>
        <AdminHead/>
            {children}
        </section>
    )
}