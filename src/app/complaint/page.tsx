import Complaint from "@/components/complaintCentre/Complaint";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export default function page() {
    return (
        <div>
            <Navbar />
            <Complaint />
            <Footer />
        </div>
    );
}