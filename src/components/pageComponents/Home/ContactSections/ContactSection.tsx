import { MdEmail, MdMessage, MdPerson, MdPhone, MdSubject } from "react-icons/md";

export default function ContactSections() {
    return (
        <div className="relative overflow-x-hidden container w-full flex flex-col justify-center items-center">

            <div className="grid grid-cols-2 w-full container">
                <div>
                    <form className="flex flex-col min-w-xl gap-4 absolute top-0 start-40 p-10 border border-accent z-50  bg-white">
                        <div className="relative">
                            <MdPerson className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                            <input
                                type="text"
                                name="name"
                                placeholder="الاسم الكامل"
                                className="w-full bg-gray-100 p-3 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <MdEmail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                            <input
                                type="email"
                                name="email"
                                placeholder="البريد الإلكتروني"
                                className="w-full bg-gray-100 p-3 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                            <MdPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="رقم الهاتف"
                                className="w-full bg-gray-100 p-3 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="relative">
                            <MdSubject className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                            <input
                                type="text"
                                name="subject"
                                placeholder="الموضوع"
                                className="w-full bg-gray-100 p-3 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <MdMessage className="absolute right-3 top-3 text-gray-400 text-xl" />
                            <textarea
                                name="message"
                                placeholder="رسالتك"
                                className="w-full bg-gray-100 p-3 pr-12 h-40 rounded resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-white p-3 rounded cursor-pointer transition-colors font-semibold text-lg mt-2"
                        >
                            إرسال
                        </button>
                    </form>
                </div>
                <div className="flex flex-col justify-center items-start text-left px-4 py-15">
                    <h2 className="text-4xl lg:text-7xl font-semibold text-primary mb-8  mt-16 lg:mt-0 px-4 lg:px-0">
                        تواصل معنا
                    </h2>
                    <p>نسعد دائما في آل ملحم بتواصلكم معنا والإجابة على استفساراتكم، أرسل لنا تساؤلك الآن</p>
                </div>
            </div>
            <div className="w-full clipped-section bg-cover bg-no-repeat  overflow-hidden relative py-16 lg:py-24 min-h-[600px]">
                <div>
                    afas
                </div>
            </div>
        </div>
    )
}
