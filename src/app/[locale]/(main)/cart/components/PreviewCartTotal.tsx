import Button from "@/components/Button/Button";

function PreviewCartTotal() {
  return (
    <div className="md:min-w-[391px] dark:bg-dark-primary bg-white p-5 rounded-[20px]">
      <h2>T��ng cộng</h2>
      <div className="flex flex-col gap-4">
        <p>T��ng giá trị đơn hàng: $1000</p>
        <p>Phí vận chuyển: $100</p>
        <p>T��ng thanh toán: $1100</p>
      </div>
      <div className="flex justify-end">
        <Button className="bg-primary text-white py-2 px-4 rounded-full">
          Continute to checkout
        </Button>
      </div>
    </div>
  );
}

export default PreviewCartTotal;
