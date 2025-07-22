// window.addEventListener("DOMContentLoaded", () => {
//   const staffForm = document.getElementById("staffForm");
//   const staffTableBody = document.querySelector("#staff-table tbody");

//   // 🔁 State for editing
//   let isEditing = false;
//   let editingId = null;

//   // 🔁 1. Fetch & Render Staff
//   async function fetchStaff() {
//     try {
//       const res = await fetch("https://nursing-care.onrender.com/api/staffs");
//       const data = await res.json();

//       staffTableBody.innerHTML = "";

//       data.forEach((staff) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//           <td>
//             <img src="${staff.photo}" width="50" height="50"
//               style="object-fit:cover; border-radius:4px"
//               onerror="this.src='https://via.placeholder.com/50?text=No+Image';" />
//           </td>
//           <td>${staff.name}</td>
//           <td>${staff.role}</td>
//           <td>${staff.email}</td>
//           <td>${staff.phone}</td>
//           <td>
//             <button onclick="editStaff('${staff._id}')">Edit</button>
//             <button onclick="deleteStaff('${staff._id}')">Delete</button>
//           </td>
//         `;
//         staffTableBody.appendChild(row);
//       });
//     } catch (err) {
//       console.error("❌ Error loading staff:", err);
//     }
//   }

//   // ➕ 2. Create or Update Staff
//   if (staffForm) {
//     staffForm.addEventListener("submit", async (e) => {
//       e.preventDefault();

//       const name = document.getElementById("name").value.trim();
//       const role = document.getElementById("role").value.trim();
//       const photo = document.getElementById("photo").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const phone = document.getElementById("phone").value.trim();

//       if (!name || !role || !photo || !email || !phone) {
//         alert("Please fill in all fields.");
//         return;
//       }

//       const staffData = { name, role, photo, email, phone };

//       try {
//         if (isEditing) {
//           // Update request
// const res = await fetch(`https://nursing-care.onrender.com/api/staffs/${editingId}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(staffData),
//           });

//           if (!res.ok) throw new Error("Update failed");

//           alert("✅ Staff updated!");
//           isEditing = false;
//           editingId = null;
//           staffForm.querySelector("button[type='submit']").textContent = "Add Staff";
//         } else {
//           // Create request
//           const res = await fetch("https://nursing-care.onrender.com/api/staffs", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(staffData),
//           });

//           if (!res.ok) throw new Error("Failed to create staff");

//           alert("✅ Staff added!");
//         }

//         staffForm.reset();
//         fetchStaff();
//       } catch (err) {
//         console.error("❌ Error submitting form:", err);
//         alert("Failed. Please try again.");
//       }
//     });
//   }

//   // ✏️ 3. Edit Staff - fills the form for editing
//   window.editStaff = async function (id) {
//     try {
//       const res = await fetch(`https://nursing-care.onrender.com/api/staffs/${id}`);
//       const staff = await res.json();

//       document.getElementById("name").value = staff.name;
//       document.getElementById("role").value = staff.role;
//       document.getElementById("photo").value = staff.photo;
//       document.getElementById("email").value = staff.email;
//       document.getElementById("phone").value = staff.phone;

//       isEditing = true;
//       editingId = id;
//       staffForm.querySelector("button[type='submit']").textContent = "Update Staff";
//     } catch (err) {
//       console.error("❌ Edit failed:", err);
//       alert("Edit failed. Please try again.");
//     }
//   };

//   // ❌ 4. Delete Staff
//   window.deleteStaff = async function (id) {
//     const confirmDelete = confirm("Are you sure you want to delete this staff member?");
//     if (!confirmDelete) return;

//     try {
//       const res = await fetch(`https://nursing-care.onrender.com/api/staffs/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) throw new Error("Failed to delete");

//       fetchStaff();
//     } catch (err) {
//       console.error("❌ Delete failed:", err);
//       alert("Delete failed. Please try again.");
//     }
//   };

//   // 🚀 Initial render
//   fetchStaff();
// });


window.addEventListener("DOMContentLoaded", () => {
  const staffForm = document.getElementById("staffForm");
  const staffTableBody = document.querySelector("#staff-table tbody");
 const loginForm = document.getElementById("adminLoginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("adminUsername").value;
      const password = document.getElementById("adminPassword").value;

      if (username === "admin" && password === "admin123") {
        // ✅ Redirect to staff panel directly
        window.location.href = "admin.html";  // <-- this should be your staff management page
      } else {
        alert("❌ Invalid username or password");
      }
    });
  }


  let isEditing = false;
  let editingId = null;

  // 🔁 1. Fetch & Render Staff
  async function fetchStaff() {
    try {
      const res = await fetch("https://nursing-care.onrender.com/api/staffs");
      const data = await res.json();

      staffTableBody.innerHTML = "";

      data.forEach((staff) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>
            <img src="${staff.photo}" width="50" height="50"
              style="object-fit:cover; border-radius:4px"
              onerror="this.src='https://via.placeholder.com/50?text=No+Image';" />
          </td>
          <td>${staff.name}</td>
          <td>${staff.role}</td>
          <td>${staff.email}</td>
          <td>${staff.phone}</td>
          <td>
            <button onclick="editStaff('${staff._id}')">Edit</button>
            <button onclick="deleteStaff('${staff._id}')">Delete</button>
          </td>
        `;
        staffTableBody.appendChild(row);
      });
    } catch (err) {
      console.error("❌ Error loading staff:", err);
    }
  }

  // ➕ 2. Create or Update Staff
  if (staffForm) {
    staffForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const role = document.getElementById("role").value.trim();
      const photo = document.getElementById("photo").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (!name || !role || !photo || !email || !phone) {
        alert("Please fill in all fields.");
        return;
      }

      const staffData = { name, role, photo, email, phone };

      try {
        let res;
        if (isEditing) {
          res = await fetch(`https://nursing-care.onrender.com/api/staffs/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(staffData),
          });

          if (!res.ok) throw new Error("Update failed");

          alert("✅ Staff updated!");
          isEditing = false;
          editingId = null;
          staffForm.querySelector("button[type='submit']").textContent = "Add Staff";
        } else {
          res = await fetch("https://nursing-care.onrender.com/api/staffs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(staffData),
          });

          if (!res.ok) throw new Error("Failed to create staff");

          alert("✅ Staff added!");
        }

        staffForm.reset();
        fetchStaff();
      } catch (err) {
        console.error("❌ Error submitting form:", err);
        alert("Failed. Please try again.");
      }
    });
  }

  // ✏️ 3. Edit Staff - fills the form for editing
  window.editStaff = async function (id) {
    try {
      const res = await fetch(`https://nursing-care.onrender.com/api/staffs/${id}`);

      // ⚠️ Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format (expected JSON)");
      }

      const staff = await res.json();

      document.getElementById("name").value = staff.name;
      document.getElementById("role").value = staff.role;
      document.getElementById("photo").value = staff.photo;
      document.getElementById("email").value = staff.email;
      document.getElementById("phone").value = staff.phone;

      isEditing = true;
      editingId = id;
      staffForm.querySelector("button[type='submit']").textContent = "Update Staff";
    } catch (err) {
      console.error("❌ Edit failed:", err);
      alert("Edit failed. Please try again.");
    }
  };

  // ❌ 4. Delete Staff
  window.deleteStaff = async function (id) {
    const confirmDelete = confirm("Are you sure you want to delete this staff member?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://nursing-care.onrender.com/api/staffs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      fetchStaff();
    } catch (err) {
      console.error("❌ Delete failed:", err);
      alert("Delete failed. Please try again.");
    }
  };

  // 🚀 Initial render
  fetchStaff();
});
