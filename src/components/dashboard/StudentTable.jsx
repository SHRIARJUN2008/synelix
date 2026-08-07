const students = [
  {
    name: "Arjun K",
    department: "Computer Science",
    score: "96%",
    status: "Placed",
  },
  {
    name: "Priya M",
    department: "AI & DS",
    score: "91%",
    status: "Interview",
  },
  {
    name: "Rahul S",
    department: "Information Tech",
    score: "84%",
    status: "Training",
  },
  {
    name: "Anjali R",
    department: "Electronics",
    score: "98%",
    status: "Placed",
  },
];

function StudentTable() {
  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b px-8 py-6">

        <div>
          <h2 className="text-2xl font-bold">
            Recent Students
          </h2>

          <p className="text-slate-500">
            AI placement readiness overview
          </p>
        </div>

        <input
          placeholder="Search student..."
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-black"
        />

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b text-left text-slate-500">

            <th className="px-8 py-5">Student</th>

            <th>Department</th>

            <th>AI Score</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student.name}
              className="border-b transition hover:bg-slate-50"
            >

              <td className="px-8 py-5 font-semibold">
                {student.name}
              </td>

              <td>{student.department}</td>

              <td>{student.score}</td>

              <td>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium
                  ${
                    student.status === "Placed"
                      ? "bg-green-100 text-green-700"
                      : student.status === "Interview"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {student.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;