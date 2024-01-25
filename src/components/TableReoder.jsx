import React, { useEffect, useRef, useState } from "react";
// Thử sử dụng đường dẫn tương đối

// Hoặc sử dụng đường dẫn đầy đủ
import $ from "jquery"; // Import jQuery
import "datatables.net"; // Import DataTables
import "datatables.net-rowreorder"; // Import DataTables RowReorder
import "./style.css";
import "./css.css";
// a little function to help us with reordering the result
const Table = (list, startIndex, endIndex) => {
  const tableRef = useRef();
  const [data, setData] = useState([
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ]);
  const sortArr = (arr) => {};
  useEffect(() => {
    // Khởi tạo DataTables và RowReorder

    const table = $(tableRef.current).DataTable({
      rowReorder: {
        selector: "td:nth-child(1)",
      },
      responsive: true, // Đảm bảo DataTables responsive
      // Các tùy chọn khác của DataTables có thể được thêm vào đây
    });

    return () => {
      // Hủy bỏ DataTables khi component unmount
      table.destroy();
      table.on("row-reorder.dt", function (e, details, changes) {
        console.log(e, details);
        console.log("Row reordered:", changes);
        const arr = [];
        const indexArr = [];
        details.forEach((el) => {
          const findIndex = data.findIndex((item) => item.name == el.oldData);
          const newdata = data[findIndex];
          arr.push(newdata);
          data.splice(findIndex, 1);

          indexArr.push(findIndex);
        });
        console.log(indexArr);
        console.log(arr);
        const newARrr = [...data];
        arr.forEach((item) => newARrr.push(item));
        console.log(newARrr);
        setData(newARrr);
      });
    };
  }, []);
  console.log("data", data);
  return (
    <table ref={tableRef} className="display" id="example">
      <thead>
        <tr>
          <th>Column 1</th>
          {/* Thêm các cột khác nếu cần */}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
            </tr>
          );
        })}
        {/* Thêm các hàng khác nếu cần */}
      </tbody>
    </table>
  );
};

export default Table;
