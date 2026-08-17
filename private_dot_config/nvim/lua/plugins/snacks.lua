return {
  "folke/snacks.nvim",
  priority = 1000,
  lazy = false,
  opts = {
    -- Bật tính năng hiển thị hình ảnh
    image = {
      enabled = true,
      force_kitty = true, -- Ép dùng giao thức Kitty (Ghostty hỗ trợ cực tốt)
    },
  },
}
