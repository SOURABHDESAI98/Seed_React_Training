/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState } from "react";


  const result = [
    {
      id: 1 ,
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@company.com",
      department: "Engineering",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Smith",
      email: "michael.smith@company.com",
      department: "Marketing",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      firstName: "Sophia",
      lastName: "Williams",
      email: "sophia.williams@company.com",
      department: "Design",
      image: "htps://i.pravatar.cc/150?img=5",
    },
    {
      id: 4,
      firstName: "James",
      lastName: "Brown",
      email: "james.brown@company.com",
      department: "Engineering",
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 5,
      firstName: "Olivia",
      lastName: "Davis",
      email: "olivia.davis@company.com",
      department: "Sales",
      image: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 6,
      firstName: "William",
      lastName: "Miller",
      email: "william.miller@company.com",
      department: "Engineering",
      image: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 7,
      firstName: "Ava",
      lastName: "Wilson",
      email: "ava.wilson@company.com",
      department: "HR",
      image: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: 8,
      firstName: "Benjamin",
      lastName: "Moore",
      email: "benjamin.moore@company.com",
      department: "Finance",
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 9,
      firstName: "Isabella",
      lastName: "Taylor",
      email: "isabella.taylor@company.com",
      department: "Design",
      image: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: 10,
      firstName: "Lucas",
      lastName: "Anderson",
      email: "lucas.anderson@company.com",
      department: "Engineering",
      image: "https://i.pravatar.cc/150?img=17",
    },
  ];
export default function Dashboard() {
;
  const [users, setUsers] = useState(result);
 

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>👥 Employee Directory</h1>
          <p>Manage and view all employees</p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-number">{users.length}</div>
            <div className="stat-label">Total Employees</div>
          </div>
        </div>

        {users.length > 0 ? (
          <div className="employee-grid">
            {users.map((user: any) => (
              <div key={user.id} className="employee-card">
                <div className="employee-avatar">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="avatar-image"
                    />
                  ) : (
                    <span>
                      {user.firstName?.[0]}
                      {user.lastName?.[0]}
                    </span>
                  )}
                </div>
                <div className="employee-info">
                  <h3 className="employee-name">
                    {user.firstName} {user.lastName}
                  </h3>
                  {user.email && (
                    <p className="employee-email">📧 {user.email}</p>
                  )}
                  {user.department && (
                    <span className="employee-badge">{user.department}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h3>No employees found</h3>
            <p>There are no employees to display at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
