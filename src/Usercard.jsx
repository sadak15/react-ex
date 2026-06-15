

// const UserCard = () => {
//     return (
//     <div>
//         <h2>User Name: Ahmed Ali</h2>
//         <p>Email: sadakc15@gmail.com</p>
//     </div>
// )
// };
//  export default UserCard





const UserCard = ({Name, Email}) => {
    return (
    <div>
        <h2>User Name: {Name}</h2>
        <p>Email: {Email}</p>
    </div>
)
};
 export default UserCard