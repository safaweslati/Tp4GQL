export const Mutation = {
   AddCv : (parent , {CvaddInput} ,{data, pubSub},info) =>  {
     if(!(data.users.find(user => user.id == CvaddInput.userId))){
        throw new Error(`le user d'id ${CvaddInput.userId} n'existe pas`)
      }
      if(!(data.skills.filter(skill => CvaddInput.skillIds.every((id) => data.skills.find((skill) => skill.id == id))))){
        throw new Error(`les skills d'ids ${CvaddInput.skillIds} n'existe pas`)
      }
      const cv= {
        id: data.cvs[data.cvs.length-1].id + 1,
        ...CvaddInput
      }
      data.cvs.push(cv)
      pubSub.publish('Cv_changed', {cv : cv, mutation: "ADD"})
      return cv
       }
       ,
    
    UpdateCv : (parent , {id , CvupdateInput, pubSub} ,{data},info) => {
       const cv = data.cvs.find(cv => cv.id == id)
       if(!cv){
          throw new Error(`le cv d'id ${id} n'existe pas`)
        }
        for(let element in CvupdateInput){
            cv[element]= CvupdateInput[element]
        }
        pubSub.publish('Cv_changed', {cv : cv, mutation: "UPDATE"})
        return cv
    },

        
    deleteCv : (_,{id},{data, pubSub}) => {
       const index = data.cvs.findIndex(cv => cv.id == id)
       if(index == -1){
        throw new Error(`le cv d'id ${id} n'existe pas`)
      }
      const cv =  data.cvs.find(cv => cv.id == id)
      data.cvs.splice(index,1)
      pubSub.publish('Cv_changed', { cv : cv, mutation: "DELETE"})
      return cv
     }

}