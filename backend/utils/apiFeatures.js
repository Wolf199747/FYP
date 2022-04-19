class APIFeatuers{

    constructor(query,qeuryStr){

        this.query=query;
        this.qeuryStr=qeuryStr;
    }

    search(){
        const keyword= this.qeuryStr.keyword ? {
            name:{
                $regex: this.qeuryStr.keyword,
                $options: 'i'
            }
        } :{}
        console.log(keyword);
        this.query = this.query.find({...keyword});
        return this;
    }
    filter(){

        const queryCopy = {...this.qeuryStr};
       
        // Removing fields from the query

        const removeFields = ['keyword','limit','page']
        removeFields.forEach(el => delete queryCopy[el]);

        console.log(queryCopy);
        //Advance filter for price ratings etc

        let qeuryStr = JSON.stringify(queryCopy);
        qeuryStr =qeuryStr.replace(/\b(gt|gte|lt|lte)\b/g, match=> `$${match}`)
        console.log(queryCopy);
        this.query=this.query.find(JSON.parse(qeuryStr));
        
        return this;
    }
    pagination(resPerPage){

        const currentPage = Number(this.qeuryStr.page) || 1;
        const skip= resPerPage * (currentPage-1);

        this.query=this.query.limit(resPerPage).skip(skip);

        return this;
    }
}

module.exports= APIFeatuers;