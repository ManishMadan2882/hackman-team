class ApiFeatures {
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }

    search(){
        let keyword;
        if(this.queryString.name){
             keyword = this.queryString.name ? {
                name:{
                    $regex:this.queryString.name,
                    $options:'i'
                }
            }:{};
        }
        // const keyword = this.queryString.name ? {
        //     name:{
        //         $regex:this.queryString.name,
        //         $options:'i'
        //     }
        // }:{};
        else if(this.queryString.city){
             keyword = this.queryString.city ? {
                city:{
                    $regex:this.queryString.city,
                    $options:'i'
                }
            }:{};
        }
        else if(this.queryString.courts){
            keyword = this.queryString.courts ? {
                courts:{
                    $regex:this.queryString.courts,
                    $options:'i'
                }
            }:{};
        }

        else if(this.queryString.cases){
            keyword = this.queryString.cases ? {
                cases:{
                    $regex:this.queryString.cases,
                    $options:'i'
                }
            }:{};
        }

        this.query=this.query.find({...keyword});
        return this;
    }
}

module.exports = ApiFeatures;