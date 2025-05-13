import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";

export default function NotificationForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <div className="grid grid-cols-1 ml-36   md:grid-cols-3 gap-6 p-6">
      {/* Left Side: Form */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold">Create Notification</h1>

        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Notification Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Limited Time Offer: [Discount]% Off"
              maxLength={60}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-sm text-gray-500">Maximum 60 characters</p>
          </div>

          {/* Message Editor */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Notification Message *
            </label>
            <Editor
              apiKey="your-tinymce-api-key"
              value={message}
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  "advlist autolink lists link charmap preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={(content) => setMessage(content)}
            />
            <p className="text-sm text-gray-500">Maximum 500 characters</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
            Save as Draft
          </button>
          <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
            Schedule
          </button>
          <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Send Now
          </button>
        </div>
      </div>

      {/* Right Side: Summary & Preview */}
      <div className="space-y-6 mt-16">
        {/* Summary */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Summary</h2>
          <p>
            <strong>Status:</strong> Ready to Send
          </p>
          <p>
            <strong>Audience:</strong> Accelerator Users Only
          </p>
          <p>
            <strong>Delivery:</strong> {format(date, "yyyy/MM/dd")} at 12:07 PM
          </p>
        </div>

        {/* Preview */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Preview</h2>
          <p className="text-sm text-gray-600 font-medium">
            Accelerator Program Launch
          </p>
          <p className="text-sm">
            Join our exclusive accelerator program for startups and
            entrepreneurs...
          </p>
        </div>
      </div>
    </div>
  );
}
