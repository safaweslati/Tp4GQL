export const Cv = {
    user: ({userId},args,{data}) => {
       return data.users.find(u => u.id == userId)
    },
    skills: ({skillIds},args,{data}) => {
        return data.skills.filter(skill => skillIds.includes(skill.id))
    }
}