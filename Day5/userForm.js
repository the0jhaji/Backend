function userForm(req, res){

    res.write(`
                <form action="/submit" method="post">
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="Email"/>
                    <button> submit</button>
                </form>
    `)
}
module.exports=userForm;