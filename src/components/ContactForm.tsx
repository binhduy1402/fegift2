import { useState, useEffect, FormEvent } from "react";
import { Phone, Mail, HelpCircle, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "../data";

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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-bg rounded-sm border border-secondary-brand/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Contact Form UI */}
          <div className="lg:col-span-7 p-6 sm:p-12 relative flex flex-col justify-center">
            
            <div className="mb-8 text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#7c142b] uppercase block mb-1">
                NHẬN TƯ VẤN MIỄN PHÍ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-text font-bold tracking-tight">
                Nhận Báo Giá Quà Tặng Doanh Nghiệp
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-text/65 leading-relaxed mt-2 font-light">
                Chia sẻ nhu cầu của doanh nghiệp, đội ngũ FESGift sẽ liên hệ tư vấn và đề xuất giải pháp phù hợp trong vòng 2 giờ làm việc.
              </p>
            </div>

            {isSubmitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-8 text-center flex flex-col items-center justify-center space-y-4 animate-scaleUp">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-emerald-900">
                  Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800/80 font-light max-w-md mx-auto leading-relaxed">
                  Cám ơn quý khách đã tin tưởng dịch vụ của FESGift. Chuyên viên của FESGift sẽ chủ động liên hệ trực tiếp đến quý khách qua số điện thoại/Zalo/Email trong thời gian sớm nhất.
                </p>
                    <p className="text-sm text-emerald-700">
                      Quý khách có thể gửi yêu cầu mới sau
                    </p>
                    
                    <button
                      disabled={countdown > 0}
                      onClick={() => {
                        if (countdown > 0) return;
                    
                        setErrMessage("");
                        setIsSubmitSuccess(false);
                      }}
                      className={`min-w-[220px] px-6 py-3 rounded-sm transition-all duration-300 ${
                        countdown > 0
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed font-mono text-lg tracking-[0.25em] font-bold"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold tracking-widest uppercase"
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
                  <div className="p-3.5 bg-red-50 border border-red-200 text-xs text-red-700 font-medium rounded-sm">
                    {errMessage}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
                    Họ và Tên (*)
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

  <div>
    <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
      Tên doanh nghiệp (*)
    </label>
    <input
      type="text"
      required
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      placeholder="Công ty ABC"
      className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
    />
  </div>

  <div>
    <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
      Số điện thoại (*)
    </label>
    <input
      type="tel"
      required
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="0901234567"
      className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
    />
  </div>

</div>

<div>
  <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase mb-1.5">
    Email
  </label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="contact@company.com"
    className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
  />
</div>
                {/* Message Box */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[10px] font-bold tracking-wider text-charcoal-text/60 uppercase">
                      Lời Nhắn / Yêu Cầu Chế Tác
                    </label>
                    {prefilledProduct && (
                      <span className="text-[10px] font-semibold text-primary-brand bg-primary-brand/10 px-2 py-0.5 rounded-sm">
                        Đang quan tâm: {prefilledProduct}
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Yêu cầu riêng về màu sắc, in dập logo, số lượng set hay ngân sách chi tiết..."
                    className="w-full px-4 py-3 bg-white border border-secondary-brand/10 hover:border-primary-brand/30 focus:border-primary-brand focus:outline-none rounded-sm text-sm text-charcoal-text font-light tracking-wide transition-all"
                  />
                </div>

                {/* Submission CTA Button */}
                <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary-brand hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold tracking-widest rounded-sm transition-all uppercase shadow-md hover:shadow-lg"
                      style={{ backgroundColor: "#7c142b" }}
                    >
                      {isSubmitting ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
                    </button>
                  <p className="text-center text-[11px] text-charcoal-text/50 mt-3">
                    Chuyên viên FESGift sẽ phản hồi trong vòng 2 giờ làm việc.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Right: Curated Visual and Contacts card */}
          <div className="lg:col-span-5 relative bg-charcoal-text flex flex-col justify-between overflow-hidden p-6 sm:p-12 text-white">
            
            {/* Background design catalog photograph */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop"
                alt="Luxury corporate journal & box mockup set"
                className="w-full h-full object-cover opacity-25 filter grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-brand/80 via-charcoal-text/90 to-charcoal-text/95 mix-blend-multiply" />
            </div>

            <div className="relative z-10">
              {/* Luxury Seal badge styling */}
              <div className="w-14 h-14 border border-muted-gold/40 rounded-full flex items-center justify-center bg-white/5 mb-8">
                <span className="font-serif text-sm font-semibold tracking-widest text-muted-gold leading-none">F</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide leading-tight">
                Nhận Tư Vấn
                <br />
                Miễn Phí Từ FESGift
              </h3>
              <p className="text-sm text-white/75 leading-relaxed mt-4 max-w-sm">
                Chia sẻ nhu cầu của doanh nghiệp, đội ngũ FESGift sẽ tư vấn giải pháp quà tặng phù hợp với ngân sách, thương hiệu và mục tiêu chiến dịch của bạn.
              </p>

              <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-muted-gold" />
                    <span>Tư vấn giải pháp miễn phí</span>
                  </div>
                
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-muted-gold" />
                    <span>Báo giá nhanh trong ngày</span>
                  </div>
                
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-muted-gold" />
                    <span>Thiết kế theo nhận diện thương hiệu</span>
                  </div>
                </div>
            </div>

            {/* Direct support information box */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-sm space-y-4">
              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-muted-gold/25 flex items-center justify-center text-muted-gold">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#ffbabf] uppercase leading-none">Hỗ trợ 24/7 Hotline</p>
                    <a
                      href={`tel:${BRAND_INFO.hotline}`}
                      className="text-lg font-extrabold tracking-wide hover:text-muted-gold transition-colors block mt-1"
                    >
                      {BRAND_INFO.hotline}
                    </a>
                </div>
              </div>

              <div className="flex gap-3 justify-start items-center">
                    <div className="w-10 h-10 rounded-full bg-muted-gold/25 flex items-center justify-center text-muted-gold">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                  
                    <div className="text-left">
                      <p className="text-[9px] font-bold tracking-widest text-[#ffbabf] uppercase leading-none">
                        Zalo Tư Vấn
                      </p>
                  
                      <a
                        href="https://zalo.me/0931133790"
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-extrabold font-bold tracking-wider hover:text-muted-gold transition-colors block mt-1"
                      >
                        0931 133 790
                      </a>
                    </div>
                  </div>

              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-muted-gold/25 flex items-center justify-center text-muted-gold">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#ffbabf] uppercase leading-none">Email Phòng Giao dịch</p>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-xs text-white/80 hover:text-muted-gold transition-colors block mt-1 font-sans">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 justify-start items-center">
                <div className="w-10 h-10 rounded-full bg-muted-gold/25 flex items-center justify-center text-muted-gold">
                  <HelpCircle className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold tracking-widest text-[#ffbabf] uppercase leading-none">Địa chỉ làm việc</p>
                  <p className="text-xs font-light text-white/90 mt-1">
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
