import { useState, useEffect, FormEvent } from "react";
import { Phone, Mail, HelpCircle, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "../data";
import zaloIcon from "../assets/zalo.svg";

interface ContactFormProps {
  prefilledProduct?: string;
  onClearPrefill?: () => void;
}

export default function ContactForm({ prefilledProduct, onClearPrefill }: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const DELAY_SECONDS = 120;
  const [countdown, setCountdown] = useState(0);

  // Populate message if prefilledProduct changes
  useEffect(() => {
    if (prefilledProduct) {
      setMessage(`Tôi cần nhận tư vấn báo giá chi tiết và chiết khấu cho dòng sản phẩm quà tặng: "${prefilledProduct}". Xin cám ơn!`);
      // Scroll to form nicely
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [prefilledProduct]);

  useEffect(() => {
  if (!isSubmitSuccess) return;

  if (countdown <= 0) return;

  const timer = setInterval(() => {
    setCountdown((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [isSubmitSuccess, countdown]);

  useEffect(() => {
  const lastSubmit = localStorage.getItem("fesgift_last_submit");

  if (!lastSubmit) return;

  const diff = Date.now() - Number(lastSubmit);
  const remain = DELAY_SECONDS - Math.floor(diff / 1000);

  if (remain > 0) {
    setIsSubmitSuccess(true);
    setCountdown(remain);
  }
}, []);

  const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Chặn gửi lại trong 5 phút
    const lastSubmit = localStorage.getItem("fesgift_last_submit");
    
    if (lastSubmit) {
      const diff = Date.now() - Number(lastSubmit);
    
      if (diff < 2 * 60 * 1000) {
        const remain = Math.ceil((2 * 60 * 1000 - diff) / 1000);
        
        const minutes = Math.floor(remain / 60);
        const seconds = remain % 60;
        
        setErrMessage(
          `Bạn vừa gửi yêu cầu. Vui lòng thử lại sau ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.`
        );
        
        return;
      }
    }

    setIsSubmitting(true);
    setErrMessage("");
    if (website.trim() !== "") {
        setIsSubmitting(false);
        return;
      }

    if (
  !fullName.trim() ||
  !company.trim() ||
  !phone.trim()
  ) {
      setErrMessage("Vui lòng điền đầy đủ thông tin bắt buộc (*).");
      setIsSubmitting(false);
      return;
    }

try {
  const response = await fetch(
    "https://duynpb.app.n8n.cloud/webhook/fesgift-lead",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        company: company,
        phone: phone,
        email: email,
        message: message,
        website: website,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Không gửi được dữ liệu");
  }

  // Lưu thời điểm gửi thành công
    localStorage.setItem(
      "fesgift_last_submit",
      Date.now().toString()
    );
  
} catch (error) {
  console.error(error);
  setErrMessage("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.");
  setIsSubmitting(false);
  return;
}
    // Reset Form & Show Success Modal
    setIsSubmitSuccess(true);
    setCountdown(DELAY_SECONDS);
    setFullName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
    setWebsite("");

    setIsSubmitting(false);

    if (onClearPrefill) {
      onClearPrefill();
    }
  };

  return (
              <section
              id="contact"
              className="
                  reveal
                  relative
                  overflow-hidden
                  bg-[#12080b]
                  py-28
              "
          >
        <div className="absolute inset-0 pointer-events-none">

            <div className="absolute left-[-150px] top-20 h-[420px] w-[420px] rounded-full bg-[#7c142b]/15 blur-[140px]" />
        
            <div className="absolute right-[-150px] bottom-0 h-[380px] w-[380px] rounded-full bg-[#c49b47]/10 blur-[130px]" />
        
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-card rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Contact Form UI */}
          <div className="
              lg:col-span-8
              bg-[#231116]
              p-8
              sm:p-14
              relative
              flex
              flex-col
              justify-center
              ">
            
            <div className="mb-8 text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#c49b47] uppercase block mb-1">
                NHẬN TƯ VẤN MIỄN PHÍ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f5e8c8] font-bold tracking-tight">
                Nhận Báo Giá Quà Tặng Doanh Nghiệp
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#c49b47] to-transparent" />
              </h2>
              <p className="text-xs sm:text-sm text-[#bea98f] leading-relaxed mt-2 font-light">
                Chia sẻ nhu cầu của doanh nghiệp, đội ngũ FESGift sẽ liên hệ tư vấn và đề xuất giải pháp phù hợp trong vòng 2 giờ làm việc.
              </p>
            </div>

            {isSubmitSuccess ? (
              <div
                  className="
                    bg-[#231116]
                    border
                    border-[#c49b47]/20
                    rounded-2xl
                    p-8
                    text-center
                    flex
                    flex-col
                    items-center
                    justify-center
                    space-y-4
                    animate-scaleUp
                  "
                >
                <CheckCircle2 className="w-16 h-16 text-[#c49b47] animate-bounce" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f5e8c8]">
                  Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-xs sm:text-sm text-[#bea98f] font-light max-w-md mx-auto leading-relaxed">
                  Cám ơn quý khách đã tin tưởng dịch vụ của FESGift. Chuyên viên của FESGift sẽ chủ động liên hệ trực tiếp đến quý khách qua số điện thoại/Zalo/Email trong thời gian sớm nhất.
                </p>
                    <p className="text-sm text-[#bea98f]">
                      Quý khách có thể gửi yêu cầu mới sau
                    </p>
                    
                    <button
                      disabled={countdown > 0}
                      onClick={() => {
                        if (countdown > 0) return;
                    
                        setErrMessage("");
                        setIsSubmitSuccess(false);
                      }}
                        className={`min-w-[220px] px-6 py-3 rounded-xl transition-all duration-300 ${
                          countdown > 0
                            ? "bg-[#2b171c] text-[#c49b47] border border-[#c49b47]/15 cursor-not-allowed font-mono text-lg tracking-[0.25em] font-bold"
                            : "bg-[#7c142b] hover:bg-[#91203a] text-white text-[11px] font-bold tracking-widest uppercase"
                        }`}
                    >
                      {countdown > 0
                        ? formatTime(countdown)
                        : "GỬI THÊM YÊU CẦU MỚI"}
                    </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                    className="hidden"
                  />
                
                {errMessage && (
                  <div className="p-3.5 bg-[#3b1117] border border-[#7c142b] text-xs text-[#ffb3ba] font-medium rounded-xl">
                    {errMessage}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-[#bea98f] uppercase mb-1.5">
                    Họ và Tên (*)
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 bg-[#12080b]
                      border
                      border-[#c49b47]/15
                      hover:border-[#c49b47]/40
                      focus:border-[#c49b47]
                      focus:ring-2
                      focus:ring-[#c49b47]/20
                      focus:outline-none
                      rounded-xl
                      text-sm
                      text-[#f5e8c8]
                      placeholder:text-[#7f6d5e]
                      font-light
                      tracking-wide
                      transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

  <div>
    <label className="block text-[10px] font-bold tracking-wider text-[#bea98f] uppercase mb-1.5">
      Tên doanh nghiệp (*)
    </label>
    <input
      type="text"
      required
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      placeholder="Công ty ABC"
      className="w-full px-4 py-3 bg-[#12080b]
            border
            border-[#c49b47]/15
            hover:border-[#c49b47]/40
            focus:border-[#c49b47]
            focus:ring-2
            focus:ring-[#c49b47]/20
            focus:outline-none
            rounded-xl
            text-sm
            text-[#f5e8c8]
            placeholder:text-[#7f6d5e]
            font-light
            tracking-wide
            transition-all"
                />
  </div>

  <div>
    <label className="block text-[10px] font-bold tracking-wider text-[#bea98f] uppercase mb-1.5">
      Số điện thoại (*)
    </label>
    <input
      type="tel"
      required
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="0901234567"
      className="w-full px-4 py-3 bg-[#12080b]
          border
          border-[#c49b47]/15
          hover:border-[#c49b47]/40
          focus:border-[#c49b47]
          focus:ring-2
          focus:ring-[#c49b47]/20
          focus:outline-none
          rounded-xl
          text-sm
          text-[#f5e8c8]
          placeholder:text-[#7f6d5e]
          font-light
          tracking-wide
          transition-all"
    />
  </div>

</div>

<div>
  <label className="block text-[10px] font-bold tracking-wider text-[#bea98f] uppercase mb-1.5">
    Email
  </label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="contact@company.com"
    className="w-full px-4 py-3 bg-[#12080b]
        border
        border-[#c49b47]/15
        hover:border-[#c49b47]/40
        focus:border-[#c49b47]
        focus:ring-2
        focus:ring-[#c49b47]/20
        focus:outline-none
        rounded-xl
        text-sm
        text-[#f5e8c8]
        placeholder:text-[#7f6d5e]
        font-light
        tracking-wide
        transition-all"
          />
</div>
                {/* Message Box */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[10px] font-bold tracking-wider text-[#bea98f] uppercase">
                      Lời Nhắn / Yêu Cầu Chế Tác
                    </label>
                    {prefilledProduct && (
                      <span className="text-[#c49b47]
                          bg-[#c49b47]/10
                          border
                          border-[#c49b47]/20
                          rounded-full">
                        Đang quan tâm: {prefilledProduct}
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Yêu cầu riêng về màu sắc, in dập logo, số lượng set hay ngân sách chi tiết..."
                    className="w-full px-4 py-3 bg-[#12080b]
                        border
                        border-[#c49b47]/15
                        hover:border-[#c49b47]/40
                        focus:border-[#c49b47]
                        focus:ring-2
                        focus:ring-[#c49b47]/20
                        focus:outline-none
                        rounded-xl
                        text-sm
                        text-[#f5e8c8]
                        placeholder:text-[#7f6d5e]
                        font-light
                        tracking-wide
                        transition-all"
                  />
                </div>

                {/* Submission CTA Button */}
                <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary-brand hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold tracking-widest rounded-xl transition-all uppercase shadow-[0_10px_30px_rgba(124,20,43,.35)]
                        hover:shadow-[0_18px_45px_rgba(196,155,71,.18)]
                        hover:-translate-y-1"
                      style={{ backgroundColor: "#7c142b" }}
                    >
                      {isSubmitting ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
                    </button>
                  <p className="text-center text-[11px] text-[#8f7a63] mt-3">
                    Chuyên viên FESGift sẽ phản hồi trong vòng 2 giờ làm việc.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Right: Curated Visual and Contacts card */}
          <div className="lg:col-span-4 relative bg-[#1b0d10] flex flex-col justify-between overflow-hidden p-6 sm:p-12 text-white">
            
            {/* Background design catalog photograph */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop"
                alt="Luxury corporate journal & box mockup set"
                className="w-full h-full object-cover opacity-25 filter grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12080b]/80
                  via-[#231116]/85
                  to-[#7c142b]/70 mix-blend-multiply" />
            </div>

            <div className="relative z-10">
              {/* Luxury Seal badge styling */}
              <div className="w-14 h-14 border border-[#c49b47]/20 rounded-full flex items-center justify-center bg-[#231116] mb-8">
                <span className="font-serif text-sm font-semibold tracking-widest text-[#c49b47] leading-none">F</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide leading-tight">
                Nhận Tư Vấn
                <br />
                Miễn Phí Từ FESGift
              </h3>
              <p className="text-sm text-[#bea98f] leading-relaxed mt-4 max-w-sm">
                Chia sẻ nhu cầu của doanh nghiệp, đội ngũ FESGift sẽ tư vấn giải pháp quà tặng phù hợp với ngân sách, thương hiệu và mục tiêu chiến dịch của bạn.
              </p>

              <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-[#f5e8c8]">
                    <CheckCircle2 className="w-4 h-4 text-[#c49b47]" />
                    <span>Tư vấn giải pháp miễn phí</span>
                  </div>
                
                  <div className="flex items-center gap-2 text-sm text-[#f5e8c8]">
                    <CheckCircle2 className="w-4 h-4 text-[#c49b47]" />
                    <span>Báo giá nhanh trong ngày</span>
                  </div>
                
                  <div className="flex items-center gap-2 text-sm text-[#f5e8c8]">
                    <CheckCircle2 className="w-4 h-4 text-[#c49b47]" />
                    <span>Thiết kế theo nhận diện thương hiệu</span>
                  </div>
                </div>
            </div>

            {/* Direct support information box */}
            <div className="relative z-10 bg-[#231116]/70 backdrop-blur-md border border-[#c49b47]/15 p-6 rounded-2xl space-y-4">
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-[#c49b47]/10 flex items-center justify-center text-[#c49b47]">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#c49b47] uppercase leading-none">Hỗ trợ 24/7 Hotline</p>
                    <a
                      href={`tel:${BRAND_INFO.hotline}`}
                      className="text-lg font-extrabold tracking-wide hover:text-[#c49b47] transition-colors block mt-1"
                    >
                      {BRAND_INFO.hotline}
                    </a>
                </div>
              </div>

              <div className="flex gap-3 justify-start items-center">
                  <div className="w-10 h-10 rounded-full bg-[#c49b47]/10 flex items-center justify-center">
                    <img
                      src={zaloIcon}
                      alt="Zalo"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  
                    <div className="text-left">
                      <p className="text-[9px] font-bold tracking-widest text-[#c49b47] uppercase leading-none">
                        Zalo Tư Vấn
                      </p>
                  
                      <a
                        href="https://zalo.me/0931133790"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-extrabold font-bold tracking-wider hover:text-[#c49b47] transition-colors block mt-1"
                      >
                        0931 133 790
                      </a>
                    </div>
                  </div>

              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-[#c49b47]/10 flex items-center justify-center text-[#c49b47]">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#c49b47] uppercase leading-none">Email Phòng Giao dịch</p>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-xs text-[#f5e8c8]/80 hover:text-[#c49b47] transition-colors block mt-1 font-sans">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-[#c49b47]/10 flex items-center justify-center text-[#c49b47]">
                  <HelpCircle className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#c49b47] uppercase leading-none">Địa chỉ làm việc</p>
                  <p className="text-xs font-light text-[#f5e8c8]/90 mt-1">
                    {BRAND_INFO.address}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
