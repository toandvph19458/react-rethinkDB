import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    // Khởi tạo DataTables và RowReorder

    const table = $(tableRef.current).DataTable({
      rowReorder: {
        selector: "td:nth-child(2)",
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
      });
    };
  }, []);

  return (
    <table ref={tableRef} className="display" id="example">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          {/* Thêm các cột khác nếu cần */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1 Data 1</td>
          <td>Row 1 Data 2</td>
        </tr>
        <tr>
          <td>Row 2 Data 1</td>
          <td>Row 2 Data 2</td>
        </tr>
        <tr>
          <td>Row 3 Data 1</td>
          <td>Row 3 Data 2</td>
        </tr>
        <tr>
          <td>Row 4 Data 1</td>
          <td>Row 4 Data 2</td>
        </tr>
        <tr>
          <td>Row 5 Data 1</td>
          <td>Row 5 Data 2</td>
        </tr>
        {/* Thêm các hàng khác nếu cần */}
      </tbody>
    </table>
  );
};

export default Table;
