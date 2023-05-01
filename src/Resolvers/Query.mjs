export const Query = {
    hello: () => 'Hello  !'  ,
    getCvById: (_, {id}, {data}) => { 
        const cv= data.cvs.find( cv => cv.id == id )
        if(!cv){
            throw new Error(`le cv d'id ${id} n'existe pas`)
        }
        return cv
    },
    getCvs: (parent, args, {data}, info) => { return data.cvs}

}