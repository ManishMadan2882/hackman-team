class ApiFeatures {
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }

    search(){
        const keyword = this.queryString.name ? {
            name:{
                $regex:this.queryString.name,
                $options:'i'
            }
        }:{};

        this.query=this.query.find({...keyword});
        return this;
    }
}

module.exports = ApiFeatures;