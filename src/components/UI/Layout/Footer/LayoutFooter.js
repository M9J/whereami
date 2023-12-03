import "./LayoutFooter.css";

export default function LayoutFooter() {
  return (
    <div className="layout-footer">
      <div className="layout-footer-text">
        <div className="layout-footer-text-credit">
          User Interface &copy; WhereAmI
        </div>
        <div className="layout-footer-text-credit">
          Data &copy; OpenStreetMap
        </div>
        <div className="layout-footer-text-credit">Images &copy; Unsplash</div>
      </div>
    </div>
  );
}
