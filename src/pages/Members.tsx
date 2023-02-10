import { MemberType } from "../App";

type Props = { members: Array<MemberType> };

const Members = (props: Props) => {
  let imgstyle = { width: 90, height: 80 };
  let list = props.members.map((member) => {
    return (
      <div className="col-6 col-md-4 col-lg-3" key={member.name}>
        <img
          src={member.photo}
          alt={member.name}
          className="img-thumbnail"
          style={imgstyle}
        />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div className="card card-body">
      <h2 className="m-4">Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Members;
